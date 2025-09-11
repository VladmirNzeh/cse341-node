exports.findAll = async (req, res) => {
  const db = req.app.locals.db;
  const contacts = await db.collection('contacts').find().toArray();
  res.send(contacts);
};

exports.findOne = async (req, res) => {
  const db = req.app.locals.db;
  const contact = await db.collection('contacts').findOne({ email: req.params.email });
  contact ? res.send(contact) : res.status(404).send({ message: 'Not found' });
};

exports.create = async (req, res) => {
  const db = req.app.locals.db;
  const result = await db.collection('contacts').insertOne(req.body);
  res.status(201).send(result.ops[0]);
};

exports.update = async (req, res) => {
  const db = req.app.locals.db;
  const result = await db.collection('contacts').findOneAndUpdate(
    { email: req.params.email },
    { $set: req.body },
    { returnDocument: 'after' }
  );
  result.value ? res.send(result.value) : res.status(404).send({ message: 'Not found' });
};

exports.delete = async (req, res) => {
  const db = req.app.locals.db;
  const result = await db.collection('contacts').deleteOne({ email: req.params.email });
  result.deletedCount ? res.status(204).send() : res.status(404).send({ message: 'Not found' });
};
