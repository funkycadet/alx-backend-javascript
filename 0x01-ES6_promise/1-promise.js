export default function getFullResponseFromAPI(success) {
  return new Promise(((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else if (success === false) {
      reject(Error('The fake API is not working correctly'));
    }
  }));
}
