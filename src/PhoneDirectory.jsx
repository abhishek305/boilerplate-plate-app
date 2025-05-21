import { useState } from "react";
import PhoneIcon from "./components/icons/PhoneIcon"; // Updated path
import UserIcon from "./components/icons/UserIcon"; // Updated path
import UserPlusIcon from "./components/icons/UserPlusIcon"; // Updated path
import { Button } from "./components/ui/Button"; // Updated path
import { Card } from "./components/ui/Card"; // Updated path
import { CardContent } from "./components/ui/CardContent"; // Updated path
import { Input } from "./components/ui/Input"; // Updated path

const mockUsers = [
  {
    id: 1,
    name: "Jane Doe",
    phone: "123-456-7890",
    company: "Example Inc",
  },
  {
    id: 2,
    name: "John Smith",
    phone: "123-456-7890",
    company: "ABC Corp",
  },
  {
    id: 3,
    name: "Alice Brown",
    phone: "123-456-7890",
    company: "XYZ LLC",
  },
];

export default function PhoneDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  // eslint-disable-next-line
  const [users, setUsers] = useState(mockUsers); // `setUsers` is declared but not used yet for adding/editing
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="phone-directory-container">
      <div className="header">
        <h1>Phone Directory</h1>
        <Button>
          {" "}
          {/* Removed variant and specific className, uses default from Button.js and style.css */}
          <UserPlusIcon size={16} /> Add
        </Button>
      </div>
      <Input placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <div className="grid-layout">
        <div className="contacts-list">
          {filteredUsers.map((user) => (
            <Card key={user.id} className={`user-card ${selectedUser?.id === user.id ? "selected" : ""}`} onClick={() => setSelectedUser(user)}>
              <CardContent>
                {" "}
                {/* className removed, padding handled by .user-card */}
                <h2>{user.name}</h2>
                <p>{user.phone}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          {selectedUser ? (
            <Card className="details-card">
              {" "}
              {/* Uses .details-card for styling */}
              <div className="icon-center">
                <PhoneIcon size={40} /> {/* className removed, styled by .details-card .icon-center svg */}
              </div>
              <div className="details-content">
                <p className="label">Name</p>
                <p className="value">{selectedUser.name}</p>
                <p className="label">Company</p>
                <p className="value-regular">{selectedUser.company}</p>
                <p className="label">Number</p>
                <p className="value-regular">{selectedUser.phone}</p>
              </div>
              <div className="details-footer-icon">
                <UserIcon size={32} /> {/* className removed, styled by .details-footer-icon svg */}
              </div>
            </Card>
          ) : (
            <p className="placeholder-text">Select a user to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}
