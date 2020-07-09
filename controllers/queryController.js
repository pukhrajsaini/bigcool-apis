const Query = require('../models/queryModel');

exports.addQuery = async (req, res) => {
  try {
    const newQuery = req.body;
    await Query.insertMany(newQuery);
    res.status(201).json({
      status: 'success',
      data: {
        query: newQuery
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'faild',
      message: err
    });
  }
}

exports.findAllQueries = async (req, res) => {
  try {
    const queries = await Query.find();
    res.json(queries.reverse());
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
}

exports.deleteQuery = async (req, res) => {
  try {
    await Query.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    })
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: 'Query does not exist'
    })
  }
}


exports.solvedQuery = async (req, res) => {
  try {
    const query = await Query.findOneAndUpdate({_id: req.params.id}, {solved:true});
    res.status(201).json({
      status:'success',
    })
  } catch (err) {
    res.status(400).json({
      status:'failed',
      message : 'invalid'
    })
  }
}
