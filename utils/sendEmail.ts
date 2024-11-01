import { Costumer } from "@/app/contato/page";

export async function SendEmail(data:Costumer) {
    const endPoint = '/api/email';

    try {
    const res = await fetch(endPoint,{
        method:'POST',
        body:JSON.stringify(data)
    })
   
    const resp = res.json();
    console.log('Message sent with sucess!',resp)
    }catch(error) {
        console.log('Error sending message',error)


    };

};

    

