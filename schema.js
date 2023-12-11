const qraphql = require('graphql');
const = require('lodash');

const {GraphQLObjectType,
       GraphQLSring,
       GraphQLString} = graphql

const users = [
    {"id": "21", "firstName":"Rao", "age":22};
    {"id": "15", "firstName":"Zoo", "age":16};
    {"id": "23", "firstName":"Andy", "age":24};
    {"id": "30", "firstName":"Ronny", "age":31};
]

const userType = new GraphQLObjectType({
    name: 'User',
    fields:{
        id:{type: GraphQLString},
        firstName:{type: GraphQLString},
        age:{type: GraphQLInt}
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        user:{
            type:userType,
            args:{id:{type:GraphQLString}},
            resolve(parentValue, args){
                return_.find(users,{id:args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema ({
    query:RootQuery
})