import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { useCallback, useMemo, useRef, useEffect } from 'react';
import { useState } from 'react';

const OrderItemsFieldArray = () => {
  const { control } = useFormContext();
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: 'items',
  });

  const items = useWatch({ control, name: 'items' });
  const endOfListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfListRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [fields.length]);

  const handleAddItem = useCallback(() => {
    console.log('🟠 useCallback: handleAddItem created');
    append({ name: '', quantity: 1 });
  }, [append]);

  const handleRemoveItem = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove]
  );

  const handleClearItems = useCallback(() => {
    replace([]);
  }, [replace]);

  const totalQuantity = useMemo(() => {
    console.log("🔵 useMemo: Recalculating totalQuantity...");
    return items?.reduce((sum: any, item: any) => sum + (item.quantity || 0), 0);
  }, [items]);

  const [search, setSearch] = useState('');

  const filteredFields = useMemo(() => {
    if (!search) return fields;
    return fields.filter((field, index) =>
      items[index]?.name?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, fields, items]);

  return (
    <div className='space-y-2'>
      <h3 className='text-lg font-bold'>Order Items</h3>
      <input
        type='text'
        placeholder='Search item...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='border p-2 rounded w-full'
      />
      {filteredFields.map((field, index) => (
        <div key={field.id} className='flex items-center gap-2'>
          <input
            {...control.register(`items.${index}.name`)}
            placeholder='Item Name'
            className='border p-2 rounded'
          />
          <input
            {...control.register(`items.${index}.quantity`, { valueAsNumber: true })}
            type='number'
            placeholder='Quantity'
            className='border p-2 rounded w-24'
          />
          <button type='button' onClick={() => handleRemoveItem(index)} className='text-red-500'>
            Remove
          </button>
        </div>
      ))}
      <div ref={endOfListRef} />
      <div className='flex justify-between items-center mt-2'>
        <button type='button' onClick={handleAddItem} className='text-blue-500'>
          + Add Item
        </button>
        {fields.length > 0 && (
          <button type='button' onClick={handleClearItems} className='text-yellow-500'>
            Clear Items
          </button>
        )}
      </div>
      <div className='text-right font-bold mt-2'>Total Quantity: {totalQuantity}</div>
    </div>
  );
};

export default OrderItemsFieldArray;
