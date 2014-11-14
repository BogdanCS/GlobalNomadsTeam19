function isOnline() {
  var networkState = navigator.connection.type;

  if(networkState == Connection.NONE) {
    return false;
  } else {
    return true;
  }
}

var logging = {
  queue: [],
  init: function() {
    document.addEventListener('online', logging.online.bind(logging), false);
    document.addEventListener('offline', logging.offline.bind(logging), false);
  },
  add: function(log) {
    this.queue.push(log);

    logging.process();  // always upload logs
  },
  process: function() {
    if (logging.isProcessing) return;

    if (isOnline()) {
      var logs = logging.queue.slice(0,100),
        numlogs = logging.queue.length;

      if (numlogs>0) {
        logging.isProcessing = true;

        $.post("https://campbell.dcs.gla.ac.uk/log/upload", {"data":JSON.stringify(logs)}, function(d) {
          console.log('done');
          logging.queue = logging.queue.slice(numlogs);

          logging.isProcessing = false;
          logging.process();
        }).fail(function(xhr,e) {
          console.log("Logging upload failed", e);

          logging.isProcessing = false;
        });
      }
    } else {
      console.log("offline", logging.queue.length);
    }
  },
  isProcessing: false,
  online: function() {
    logging.process();  // start uploading when online
  },
  offline: function() {

  }
};

function $$log$$(type, data, file, linenumber, revision) {
  var log = {
    app: "com.sumgroup.forgetmenot",
    type: type,
    data: data,
    timestamp: new Date().getTime(),
    device: {
      model:device.model,
      platform:device.platform,
      uuid:device.uuid,
      version:device.version,
    },
    file: file,
    linenumber: linenumber,
    revision: revision
  };

  logging.add(log);
}
