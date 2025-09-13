import React, { useState } from 'react';

export default function LactoHealthProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "John Farmer",
    email: "john.farmer@email.com",
    phone: "+1 (555) 123-4567",
    role: "Farm Owner",
    dateJoined: "January 2023",
    farmName: "Green Meadows Dairy Farm",
    farmAddress: "1245 Rural Road, Countryside, State 12345",
    farmSize: "250",
    farmType: "Dairy",
    yearsInFarming: "15",
    farmRegistration: "DF-2023-GM-001"
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleProfileSave = () => {
    console.log('Profile saved:', profileData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    if (passwordData.newPassword.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }
    console.log('Password changed');
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setShowPasswordForm(false);
    alert('Password updated successfully!');
  };

  const ProfileField = ({ label, value, name, type = "text", disabled = false }) => (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-[#212121] mb-2">{label}</label>
      {isEditing && !disabled ? (
        name === "role" || name === "farmType" ? (
          <select
            value={value}
            onChange={(e) => setProfileData({...profileData, [name]: e.target.value})}
            className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none bg-white"
          >
            {name === "role" ? (
              <>
                <option value="Farm Owner">Farm Owner</option>
                <option value="Farm Manager">Farm Manager</option>
                <option value="Veterinarian">Veterinarian</option>
                <option value="Assistant">Assistant</option>
              </>
            ) : (
              <>
                <option value="Dairy">Dairy</option>
                <option value="Mixed">Mixed</option>
                <option value="Organic">Organic</option>
                <option value="Beef">Beef</option>
              </>
            )}
          </select>
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => setProfileData({...profileData, [name]: e.target.value})}
            className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none"
          />
        )
      ) : (
        <p className="p-3 bg-[#FFF8E1] rounded-lg text-[#212121]">{value}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#7CB342] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🐄</span>
              </div>
              <span className="text-2xl font-bold text-[#212121]">LactoHealth AI</span>
            </div>
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-[#212121] hover:text-[#7CB342] font-medium transition-colors"
            >
              <span>←</span>
              <span>Back to Dashboard</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#212121] mb-2">👤 Profile Settings</h1>
          <p className="text-xl text-[#212121]/70">Manage your personal and farm information</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Picture Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-[#FFF8E1] text-center">
              <div className="w-32 h-32 bg-[#7CB342]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-6xl">👨‍🌾</span>
              </div>
              <h3 className="text-xl font-bold text-[#212121] mb-2">{profileData.fullName}</h3>
              <p className="text-[#212121]/70 mb-4">{profileData.role}</p>
              <button className="bg-[#7CB342] text-white px-4 py-2 rounded-lg hover:bg-[#7CB342]/90 transition-colors font-medium">
                📷 Change Photo
              </button>
            </div>
          </div>

          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-[#FFF8E1]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#212121]">👤 Personal Information</h2>
                <button
                  onClick={() => isEditing ? handleProfileSave() : setIsEditing(true)}
                  className="bg-[#7CB342] text-white px-4 py-2 rounded-lg hover:bg-[#7CB342]/90 transition-colors font-medium"
                >
                  {isEditing ? '💾 Save Changes' : '✏️ Edit Profile'}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <ProfileField 
                  label="Full Name" 
                  value={profileData.fullName} 
                  name="fullName"
                />
                <ProfileField 
                  label="Email Address" 
                  value={profileData.email} 
                  name="email" 
                  type="email"
                />
                <ProfileField 
                  label="Phone Number" 
                  value={profileData.phone} 
                  name="phone" 
                  type="tel"
                />
                <ProfileField 
                  label="Role" 
                  value={profileData.role} 
                  name="role"
                />
                <div className="md:col-span-2">
                  <ProfileField 
                    label="Date Joined" 
                    value={profileData.dateJoined} 
                    name="dateJoined" 
                    disabled={true}
                  />
                </div>
              </div>
            </div>

            {/* Farm Details Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-[#FFF8E1]">
              <h2 className="text-2xl font-bold text-[#212121] mb-6">🏡 Farm Details</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <ProfileField 
                    label="Farm Name" 
                    value={profileData.farmName} 
                    name="farmName"
                  />
                </div>
                <div className="md:col-span-2">
                  <ProfileField 
                    label="Farm Address/Location" 
                    value={profileData.farmAddress} 
                    name="farmAddress"
                  />
                </div>
                <ProfileField 
                  label="Farm Size (acres)" 
                  value={profileData.farmSize} 
                  name="farmSize" 
                  type="number"
                />
                <ProfileField 
                  label="Farm Type" 
                  value={profileData.farmType} 
                  name="farmType"
                />
                <ProfileField 
                  label="Years in Farming" 
                  value={profileData.yearsInFarming} 
                  name="yearsInFarming" 
                  type="number"
                />
                <ProfileField 
                  label="Farm Registration Number/ID" 
                  value={profileData.farmRegistration} 
                  name="farmRegistration"
                />
              </div>
            </div>

            {/* Security Settings Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-[#FFF8E1]">
              <h2 className="text-2xl font-bold text-[#212121] mb-6">🔐 Security Settings</h2>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-[#FFF8E1] rounded-lg">
                  <div>
                    <h3 className="font-semibold text-[#212121] mb-1">Password</h3>
                    <p className="text-[#212121]/70 text-sm">Last changed 3 months ago</p>
                  </div>
                  <button
                    onClick={() => setShowPasswordForm(!showPasswordForm)}
                    className="bg-[#1976D2] text-white px-4 py-2 rounded-lg hover:bg-[#1976D2]/90 transition-colors font-medium"
                  >
                    🔑 Change Password
                  </button>
                </div>

                {showPasswordForm && (
                  <div className="p-6 bg-[#FFF8E1]/50 rounded-lg border border-[#FBC02D]/20">
                    <h4 className="font-semibold text-[#212121] mb-4">Change Password</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#212121] mb-2">Current Password</label>
                        <input
                          type="password"
                          value={passwordData.currentPassword}
                          onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                          className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-[#212121] mb-2">New Password</label>
                        <input
                          type="password"
                          value={passwordData.newPassword}
                          onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                          className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-[#212121] mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                          className="w-full p-3 border border-[#FFF8E1] rounded-lg focus:border-[#7CB342] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                      <button
                        onClick={handlePasswordChange}
                        className="bg-[#7CB342] text-white px-6 py-2 rounded-lg hover:bg-[#7CB342]/90 transition-colors font-medium"
                      >
                        💾 Update Password
                      </button>
                      <button
                        onClick={() => setShowPasswordForm(false)}
                        className="border-2 border-[#5D4037] text-[#5D4037] px-6 py-2 rounded-lg hover:bg-[#5D4037] hover:text-white transition-colors font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Additional Security Options */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-[#7CB342]/5 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-[#212121] mb-1">Two-Factor Authentication</h3>
                      <p className="text-[#212121]/70 text-sm">Add an extra layer of security to your account</p>
                    </div>
                    <button className="bg-[#7CB342] text-white px-4 py-2 rounded-lg hover:bg-[#7CB342]/90 transition-colors font-medium text-sm">
                      🛡️ Enable 2FA
                    </button>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-[#1976D2]/5 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-[#212121] mb-1">Login History</h3>
                      <p className="text-[#212121]/70 text-sm">View your recent login activity</p>
                    </div>
                    <button className="bg-[#1976D2] text-white px-4 py-2 rounded-lg hover:bg-[#1976D2]/90 transition-colors font-medium text-sm">
                      📊 View History
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => window.history.back()}
                className="flex-1 bg-[#7CB342] text-white py-3 rounded-lg font-semibold hover:bg-[#7CB342]/90 transition-colors"
              >
                ← Back to Dashboard
              </button>
              <button className="flex-1 border-2 border-[#B71C1C] text-[#B71C1C] py-3 rounded-lg font-semibold hover:bg-[#B71C1C] hover:text-white transition-colors">
                🗑️ Deactivate Account
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}