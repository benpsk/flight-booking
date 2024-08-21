import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface FormData {
    card_holder_name: string,
    card_no: string,
    expiry_date: string,
    cvc: string,
}
interface FormProps {
    data: FormData,
    setData: (key: keyof FormData, value: string) => void;
    errors: Record<string, string>;
}
export default function PaymentForm({ data, errors, setData }: FormProps) {
    return (
        <section className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg col-span-2">
            <header>
                <h2 className="text-lg font-medium text-teal-600 dark:text-gray-100">Secure Payment</h2>
                <p className="mt-1 text-sm text-gray-800 dark:text-gray-400">
                    All card information is fully encrypted, secure and protected.
                </p>
            </header>
            <div className="mt-6 sm:space-y-0">
                {
                    Object.keys(errors).length > 0 && (
                        <InputError message="Please fill up the visa payment." />
                    )
                }
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Cedit/Debit Card</AccordionTrigger>
                        <AccordionContent className='grid grid-cols-1 gap-4 my-4'>
                            <div>
                                <Label htmlFor="payment_method">Payment method</Label>
                                <Input
                                    id="payment_method"
                                    className="mt-1 block w-full"
                                    value="Visa (let's pretend this is visa.. lol)"
                                    disabled
                                />
                            </div>
                            <div>
                                <Label htmlFor="card_holder_name">Card holder name</Label>
                                <Input
                                    id="card_holder_name"
                                    className="mt-1 block w-full"
                                    value={data.card_holder_name}
                                    onChange={(e) => setData('card_holder_name', e.target.value)}
                                    autoComplete="card_holder_name"
                                />
                                <InputError message={errors.card_holder_name} />
                            </div>
                            <div>
                                <Label htmlFor="card_number">Card number</Label>
                                <Input
                                    id="card_number"
                                    className="mt-1 block w-full"
                                    value={data.card_no}
                                    onChange={(e) => setData('card_no', e.target.value)}
                                    autoComplete="card_number"
                                />
                                <InputError message={errors.card_no} />
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                <div>
                                    <Label htmlFor="expiry_date">Expiry date</Label>
                                    <Input
                                        id="expiry_date"
                                        className="mt-1 block w-full"
                                        value={data.expiry_date}
                                        onChange={(e) => setData('expiry_date', e.target.value)}
                                        autoComplete="expiry_date"
                                    />
                                    <InputError message={errors.expiry_date} />
                                </div>
                                <div>
                                    <Label htmlFor="cvc">CVC/CVV</Label>
                                    <Input
                                        id="cvc"
                                        className="mt-1 block w-full"
                                        value={data.cvc}
                                        onChange={(e) => setData('cvc', e.target.value)}
                                        autoComplete="cvc"
                                    />
                                    <InputError message={errors.cvc} />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>QR Payment</AccordionTrigger>
                        <AccordionContent>
                            This is a qr payment.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Online Banking</AccordionTrigger>
                        <AccordionContent>
                            This is a online banking payment.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
