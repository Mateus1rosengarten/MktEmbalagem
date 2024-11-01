import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function SendEmail(request:NextRequest) {
    const {costumerName,costumerLastName,costumerEmail,costumerCity,costumerNumber,costumerText} = await request.json();

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'mateus.rosengartenn@gmail.com',
        pass: '12313123'
    }
})

const mailOptions: Mail.Options = {
    from: 'mateus.rosengartenn@gmail.com',
    to: 'mateus.rosengartenn@gmail.com',
    subject: `Contato de ${costumerName} ${costumerLastName}, Email: ${costumerEmail}`,
    text: `
Olá,

Meu nome é ${costumerName} ${costumerLastName}, sou de ${costumerCity}. Você pode me contatar pelo seguinte número de telefone: ${costumerNumber}.

Minha mensagem:
"${costumerText ?? 'Gostaria de entrar em contato com a empresa para obter mais informações'}"

Atenciosamente,
${costumerName} ${costumerLastName}
Email: ${costumerEmail}
Telefone: ${costumerNumber}
Cidade: ${costumerCity}
`
};


const sendEmail = () => 
new Promise<string>((resolve,reject) => {
    transport.sendMail(mailOptions , function(error: Error | null) {
        if(!error) {
            resolve('Email sent sucessfuly');
        }
        else {
            reject(error.message);
        }
    })
});

try{
    await sendEmail();
    return NextResponse.json({message:'Email Sent Sucessfuly'});
} catch(error) {
    return NextResponse.json({error:error},{status:500})
}


}