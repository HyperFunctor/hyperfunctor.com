// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const APIKEY = process.env.MAILERLITE_APIKEY;
    const GROUP = process.env.MAILERLITE_GROUP;

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
        error: `There was an error subscribing to the newsletter. Contact me directly at oh@zaiste.net`,
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
