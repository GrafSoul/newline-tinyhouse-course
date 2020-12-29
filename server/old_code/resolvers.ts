import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";
import { Database, Listing } from "../src/lib/types";
// import { listings } from "../listings";

export const resolvers: IResolvers = {
    Query: {
        listings: async (
            _root: undefined, 
            _args: {}, 
            {db}: {db: Database}
        ): Promise<Listing[]> => {
            // return listings;
            return await db.listings.find({}).toArray();
        }
        },
    Mutation: {
        deleteListing: async (
            _root: undefined, 
            { id }: { id: string }, 
            {db}: {db: Database}
            ): Promise<Listing> => {
            // for (let i = 0; i < listings.length; i++) {
            // if (listings[i].id === id) {
            //     return listings.splice(i, 1)[0];
            // }
            // }
    
            // throw new Error("failed to deleted listing");
            const deleteRes = await db.listings.findOneAndDelete({
                _id: new ObjectId(id),
            });

            if(!deleteRes.value) {
                throw new Error("failed to deleted listing");
            }

            return deleteRes.value;
        }
    },
    Listing: {
        id: (listing: Listing): string => listing._id.toString(),
        // title: (listing: Listing): string => listing.title,
        // image: (listing: Listing): string => listing.image
    }
};