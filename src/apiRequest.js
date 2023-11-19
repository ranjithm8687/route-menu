const apiRequest = async (URL = "", optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(URL, optionsObj);
    if (!response.ok) throw Error("Please Reload the App");
  } catch (err) {
    errMsg(err.message);
  } finally {
    return errMsg;
  }
};

export default apiRequest;
