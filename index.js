if ("serviceWorker" in navigator) {
  try {
    const registration = await navigator.serviceWorker.register("./sw.js", {
      type: "module",
    });

  } catch (error) {
    console.error(`Registration failed with ${error}`);
  }
}
