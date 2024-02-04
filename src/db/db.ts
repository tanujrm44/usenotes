import mongoose from "mongoose"

let isConnected: Boolean = false

export const connectToDB = async (): Promise<void> => {
  if (isConnected) {
    console.log("MongoDB is already connected")
    return
  }

  try {
    await mongoose.connect(
      "mongodb+srv://tanujrm15:Ahit1234@cluster0.erjg0fz.mongodb.net/useNotes?retryWrites=true&w=majority"
    )

    isConnected = true

    console.log("MongoDB connected")
  } catch (error: any) {
    console.log(error)
  }
}
