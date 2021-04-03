const Bootcamp = require("../models/Bootcamp");

//@desc     Get all bootcamps
//@route    Get /api/v1/bootcamps
//@access   public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();

    res.status(201).json({
      success: true,
      count: bootcamp.length,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

//@desc     Get single bootcamps
//@route    Get /api/v1/bootcamps/:id
//@access   public

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({
        success: false,
      });
    }

    res.status(201).json({
      success: true,

      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

//@desc     Create new bootcamps
//@route    Post/api/v1/bootcamps
//@access   private

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

//@desc     Update bootcamps
//@route    Put /api/v1/bootcamps/:id
//@access   private

exports.updateBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bootcamp) {
    return res.status(400).json({
      success: false,
    });
  }

  res.status(200).json({ success: true, data: bootcamp });
};

//@desc     Delete new bootcamps
//@route    Delete /api/v1/bootcamps
//@access   private

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
