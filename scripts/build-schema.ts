// // src/schema.ts

// import path from 'path';
// import fs from 'fs';
// import { printSchema, lexicographicSortSchema } from 'graphql';

// import { builder } from './builder';

// // the toSchema() method converts our resolver first code into a SDL // schema
// export const schema = builder.toSchema({});

// const schemaAsString = printSchema(lexicographicSortSchema(schema));

// // we will write this schema to a file.
// if (process.env.NODE_ENV !== 'production') {
//   fs.writeFileSync(path.join(process.cwd(), './schema.gql'), schemaAsString);
// }
