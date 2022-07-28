export const orderUpdateMail = async (
  to: string,
  tracking: string,
  firstName: string,
  address: string,
  deliveryDate: string
) => {
  try {
    const response = await fetch(`/api/sendOrderSuccessMail`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        fromEmail: "receipts-noreply@flowersghana.com",
        toEmail: to,
        tracking: tracking,
        firstName: firstName,
        address: address,
        deliveryDate: deliveryDate,
        replyEmail: "cassidyblay@gmail.com",
      }),
    });
    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const adminUpdateMail = async (to: string, delivery: string) => {
  try {
    const response = await fetch(`/api/alertAdmins`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        fromEmail: "neworder-noreply@flowersghana.com",
        toEmail: to,
        delivery: delivery,
      }),
    });
    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
