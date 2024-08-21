import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Country } from '@/types';

interface FormData {
    passenger_gender: string,
    passenger_first_name: string,
    passenger_last_name: string,
    passenger_dob: string,
    passenger_country_id: string,
}
interface FormProps {
    countries: Country[],
    data: FormData,
    setData: (key: string, value: string) => void;
    errors: any
}
export default function PassengerForm({ countries, data, setData, errors }: FormProps) {
    return (
        <section className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg col-span-2">
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Passenger Detail</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Please be careful - Passenger details must match your passport or photo ID
                </p>
            </header>
            <div className="mt-6 sm:space-y-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="first_name">First name</Label>
                    <Input
                        id="first_name"
                        className="mt-1 block w-full"
                        value={data.passenger_first_name}
                        onChange={(e) => setData('passenger_first_name', e.target.value)}
                        autoComplete="first_name"
                    />

                    <InputError message={errors?.['passenger.first_name']} />
                </div>
                <div>
                    <Label htmlFor="last_name">Last name</Label>
                    <Input
                        id="last_name"
                        className="mt-1 block w-full"
                        value={data.passenger_last_name}
                        onChange={(e) => setData('passenger_last_name', e.target.value)}
                        autoComplete="last_name"
                    />
                    <InputError message={errors?.['passenger.last_name']} />
                </div>
                <div>
                    <Label htmlFor="dob">Date of birth</Label>
                    <Input
                        type='date'
                        id="dob"
                        className="mt-1 block w-full"
                        value={data.passenger_dob}
                        onChange={(e) => setData('passenger_dob', e.target.value)}
                    />
                    <InputError message={errors?.['passenger.dob']} />
                </div>
                <div>
                    <Label htmlFor="email">Nationality</Label>
                    <div className="mt-1 block w-full">
                        <Select value={data.passenger_country_id} onValueChange={e => setData('passenger_country_id', e)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        countries.map(country => (
                                            <SelectItem key={country.id} value={`${country.id}`}>{country.name}</SelectItem>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <InputError message={errors?.['passenger.country_id']} />
                </div>
                <div>
                    <RadioGroup className='flex gap-4' value={data.passenger_gender} onValueChange={e => setData('passenger_gender', e)} >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Male" id="male" />
                            <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Female" id="female" />
                            <Label htmlFor="female">Female</Label>
                        </div>
                    </RadioGroup>
                    <InputError message={errors?.['passenger.gender']} />
                </div>
            </div>
        </section>
    );
}
