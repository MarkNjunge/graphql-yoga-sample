const helloSubChannel = "helloSubChannel";

var count = 0;

module.exports = {
  Query: {
    hello: (parent, { name }, { pubsub }) => {
      count = count + 1;
      const greeting = `Hello ${name || "World"}`;

      pubsub.publish(helloSubChannel, {
        helloSub: { total: count, greeting }
      });

      return greeting;
    },
    header: (parent, { headerName }, { request }) => {
      const authHeader = request.header(headerName);

      if (authHeader) {
        return authHeader;
      } else {
        throw `You have not passed header: ${headerName}`;
      }
    }
  },
  Mutation: {
    changeCount: (_, { value }) => {
      count = value;
      return true;
    }
  },
  Subscription: {
    helloSub: {
      subscribe: (parent, args, { pubsub }) => {
        return pubsub.asyncIterator(helloSubChannel);
      }
    }
  }
};
