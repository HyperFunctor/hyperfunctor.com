// @ts-ignore
export default async function subscribe(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email jest wymagany" });
  }

  try {
    const APIKEY = process.env.MAILERLITE_APIKEY || "";
    const GROUP = process.env.MAILERLITE_GROUP || "";

    const data = { email };

    // 6. Send a POST request to Mailchimp.
    const response = await fetch(
      `https://api.mailerlite.com/api/v2/groups/${GROUP}/subscribers`,
      {
        body: JSON.stringify(data),
        headers: {
          "X-MailerLite-ApiKey": `${APIKEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: `Pojawił się problem przy zapisie do Newslettera. Napisz do nas bezpośrednio na siema@zaisteprogramuj.pl`,
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
