const dns = require("dns");
const mongoose = require("mongoose");

// Use public DNS resolvers so mongodb+srv:// SRV lookups succeed on networks that block them
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
  try {
    // Set mongoose options
    mongoose.set('strictQuery', false);
    
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });
    
    console.log(`✅ MongoDB Connected Successfully: ${conn.connection.host}`);
    console.log(`📊 Database Name: ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    console.error("🔍 Full Error:", error);
    console.error("\n💡 Troubleshooting Tips:");
    console.error("   1. Check if MongoDB Atlas IP whitelist includes your IP");
    console.error("   2. Verify MONGO_URI credentials are correct");
    console.error("   3. Ensure the database user has proper permissions");
    console.error("   4. Check if MongoDB service is running (if using local MongoDB)\n");
    // Throw error so the caller can handle it instead of exiting the process
    throw error;
  }
};

module.exports = connectDB;
