import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/f8blog_dev', {});
    console.log('Connect successfully!!!');
  } catch (error) {
    console.log(error);
    console.log('Connect failure!!!');
  }
}

export default { connect };
