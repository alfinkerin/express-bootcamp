//@desc     Get all bootcamps
//@route    Get /api/v1/bootcamps
//@access   public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, smg: "show all bootcamps" });
};

//@desc     Get single bootcamps
//@route    Get /api/v1/bootcamps/:id
//@access   public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `get bootcamp ${req.params.id} ` });
};

//@desc     Create new bootcamps
//@route    Post/api/v1/bootcamps
//@access   private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
};

//@desc     Update bootcamps
//@route    Put /api/v1/bootcamps/:id
//@access   private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id} ` });
};

//@desc     Delete new bootcamps
//@route    Delete /api/v1/bootcamps
//@access   private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id} ` });
};
