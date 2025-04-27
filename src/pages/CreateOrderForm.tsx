import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../components/InputField';
import OrderItemsFieldArray from '../components/OrderItemsFieldArray';
import SubmitButton from '../components/SubmitButton';
import { useEffect, useRef, useCallback } from 'react';

export interface OrderFormValues {
  customerName: string;
  totalAmount: number;
  items: { name: string; quantity: number }[];
}

const CreateOrderForm = () => {
  const methods = useForm<OrderFormValues>({
    defaultValues: {
      customerName: '',
      totalAmount: 0,
      items: [{ name: '', quantity: 1 }],
    },
  });

  const customerNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // su dung use ref
    customerNameRef.current?.focus();
  }, []);

  const onSubmit = (data: OrderFormValues) => {
    console.log("Đang gửi đơn hàng...", data);
    return new Promise((resolve) => setTimeout(resolve, 2000)); // Giả lập delay API
  };
  
  const handleResetForm = useCallback(() => {
    methods.reset();
  }, [methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-4'>
        <InputField name='customerName' label='Customer Name' inputRef={customerNameRef} />
        <InputField name='totalAmount' label='Total Amount' type='number' />
        <OrderItemsFieldArray />
        <SubmitButton />
        <button
          type='button'
          onClick={handleResetForm}
          className='text-gray-500 border p-2 rounded'
        >
          Reset Form
        </button>
      </form>
    </FormProvider>
  );
};
export default CreateOrderForm;
