import mongoose from "mongoose";

const ttSchema = mongoose.Schema(
    { "vidurl" : String,
        "desc" : String,
        "song" : String,
        "channel" : String,
        "likes" : String,
        "shares" : String,
        "comments" : String,
    }
)

export default mongoose.model('tiktokVideos', ttSchema);