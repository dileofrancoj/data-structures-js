function areTheSameObject(obj1, obj2) {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    obj1.forEach((_, index) => {
      if (!areTheSameObject(obj1[index], obj2[index])) return false;
      return true;
    });
  }
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    const keys = Object.keys(obj1);
    for (const key of keys) {
      if (!areTheSameObject(obj1[key], obj2[key])) return false;
      return true;
    }
  }

  return obj1 === obj2;
}
