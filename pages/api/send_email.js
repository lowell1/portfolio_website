// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(req.body);
  res.status(404).send();
  // res.status(200).json({ name: 'John Doe' })
};
