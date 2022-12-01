import { ValuesType } from "./types";

export const orderUpdateMail = async (values: ValuesType) => {
  try {
    const response = await fetch(`/api/sendOrderSuccessMail`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        fromEmail: "receipts-noreply@flowersghana.com",
        values: values,
        replyEmail: "cassidyblay@gmail.com",
      }),
    });
    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const adminUpdateMail = async (values: ValuesType) => {
  try {
    const response = await fetch(`/api/alertAdmins`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        fromEmail: "neworder-noreply@flowersghana.com",
        toEmail: `${process.env.NEXT_PUBLIC_ADMIN_ONE!}, ${process.env
          .NEXT_PUBLIC_ADMIN_TWO!}, ${process.env.NEXT_PUBLIC_ADMIN_THREE!}`,
        values: values,
      }),
    });
    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
