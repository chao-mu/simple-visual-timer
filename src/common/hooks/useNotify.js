const isSupported = () => "Notification" in window;

function ifGranted(f) {
  if (isSupported() && Notification.permission === "granted") {
    f();
  }
}

export default () => {
  return [
    (title, body) => ifGranted(() => new Notification(title, { body })),
    () =>
      isSupported() &&
      Notification.requestPermission()
        .then((permission) => {
          console.log(`Notification Permission: ${permission}`);
        })
        .catch((error) => {
          console.error(`Error requestion Notification: ${error}`);
        }),
  ];
};
