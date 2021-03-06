//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = require('./MessagingService_types');
//HELPER FUNCTIONS AND STRUCTURES

Messaging_fetchMessages_args = function(args) {
  this.credentials = null;
  if (args) {
    if (args.credentials !== undefined) {
      this.credentials = args.credentials;
    }
  }
};
Messaging_fetchMessages_args.prototype = {};
Messaging_fetchMessages_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.credentials = new ttypes.UserCredentials();
        this.credentials.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Messaging_fetchMessages_args.prototype.write = function(output) {
  output.writeStructBegin('Messaging_fetchMessages_args');
  if (this.credentials !== null && this.credentials !== undefined) {
    output.writeFieldBegin('credentials', Thrift.Type.STRUCT, 1);
    this.credentials.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Messaging_fetchMessages_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
Messaging_fetchMessages_result.prototype = {};
Messaging_fetchMessages_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.Message();
          elem6.read(input);
          this.success.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Messaging_fetchMessages_result.prototype.write = function(output) {
  output.writeStructBegin('Messaging_fetchMessages_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Messaging_postMessage_args = function(args) {
  this.message = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    }
  }
};
Messaging_postMessage_args.prototype = {};
Messaging_postMessage_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.message = new ttypes.NewMessage();
        this.message.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Messaging_postMessage_args.prototype.write = function(output) {
  output.writeStructBegin('Messaging_postMessage_args');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRUCT, 1);
    this.message.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Messaging_postMessage_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
Messaging_postMessage_result.prototype = {};
Messaging_postMessage_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Messaging_postMessage_result.prototype.write = function(output) {
  output.writeStructBegin('Messaging_postMessage_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Messaging_ping_args = function(args) {
  this.credentials = null;
  if (args) {
    if (args.credentials !== undefined) {
      this.credentials = args.credentials;
    }
  }
};
Messaging_ping_args.prototype = {};
Messaging_ping_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.credentials = new ttypes.UserCredentials();
        this.credentials.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Messaging_ping_args.prototype.write = function(output) {
  output.writeStructBegin('Messaging_ping_args');
  if (this.credentials !== null && this.credentials !== undefined) {
    output.writeFieldBegin('credentials', Thrift.Type.STRUCT, 1);
    this.credentials.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Messaging_ping_result = function(args) {
};
Messaging_ping_result.prototype = {};
Messaging_ping_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Messaging_ping_result.prototype.write = function(output) {
  output.writeStructBegin('Messaging_ping_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MessagingClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
MessagingClient.prototype = {};
MessagingClient.prototype.fetchMessages = function(credentials, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_fetchMessages(credentials);
};

MessagingClient.prototype.send_fetchMessages = function(credentials) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('fetchMessages', Thrift.MessageType.CALL, this.seqid);
  var args = new Messaging_fetchMessages_args();
  args.credentials = credentials;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MessagingClient.prototype.recv_fetchMessages = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Messaging_fetchMessages_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('fetchMessages failed: unknown result');
};
MessagingClient.prototype.postMessage = function(message, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_postMessage(message);
};

MessagingClient.prototype.send_postMessage = function(message) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('postMessage', Thrift.MessageType.CALL, this.seqid);
  var args = new Messaging_postMessage_args();
  args.message = message;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MessagingClient.prototype.recv_postMessage = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Messaging_postMessage_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('postMessage failed: unknown result');
};
MessagingClient.prototype.ping = function(credentials, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_ping(credentials);
};

MessagingClient.prototype.send_ping = function(credentials) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('ping', Thrift.MessageType.CALL, this.seqid);
  var args = new Messaging_ping_args();
  args.credentials = credentials;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MessagingClient.prototype.recv_ping = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new Messaging_ping_result();
  result.read(input);
  input.readMessageEnd();

  callback(null)
};
MessagingProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
MessagingProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

MessagingProcessor.prototype.process_fetchMessages = function(seqid, input, output) {
  var args = new Messaging_fetchMessages_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.fetchMessages(args.credentials, function (err, result) {
    var result = new Messaging_fetchMessages_result((err != null ? err : {success: result}));
    output.writeMessageBegin("fetchMessages", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

MessagingProcessor.prototype.process_postMessage = function(seqid, input, output) {
  var args = new Messaging_postMessage_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.postMessage(args.message, function (err, result) {
    var result = new Messaging_postMessage_result((err != null ? err : {success: result}));
    output.writeMessageBegin("postMessage", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

MessagingProcessor.prototype.process_ping = function(seqid, input, output) {
  var args = new Messaging_ping_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.ping(args.credentials, function (err, result) {
    var result = new Messaging_ping_result((err != null ? err : {success: result}));
    output.writeMessageBegin("ping", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

