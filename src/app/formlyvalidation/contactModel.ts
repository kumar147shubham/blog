import { FormlyFieldConfig } from "@ngx-formly/core";

export class Contact{
    name: string;
    phonenumber: string;
    email: string;

    formFields(){
        return <FormlyFieldConfig[]>[
            {
                key: 'name',
                type: 'input',
                templateOptions:{
                    type: 'text',
                    label: 'Name Name',
                    placeholder: '',
                    required: true
                },
                validation:{
                    messages:{
                        required: 'You need to provide a name'
                    }
                }
            },
            {
                key: 'phoneNumber',
                type: 'input',
                templateOptions:{
                    type: 'tel',
                    label: 'Phone Number',
                    placeholder: '',
                    required: true
                },
                validation:{
                    messages:{
                        required: 'You need to provide a phone number'
                    }
                }
            },
            {
                key: 'email',
                type: 'select',
                props:{

                    label: 'select Email Name',
                    options: [
                        {label: 'a@gmail.com', value: '1'},
                        {label: 'bb@gmail.com', value: '2'},
                        {label: 'ccc@gmail.com', value: '3'},
                    ],
                    required: true
                },
                validators:{
                    messages:{
                        required: 'You need to provide an email'
                    }
                }
            }
        ]
    }

}