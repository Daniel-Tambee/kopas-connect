# WebSocket API Documentation

## Events

### joinGroup
- **Description**: Join a group room.
- **Parameters**:
  - `groupId` (number): The ID of the group to join.

### leaveGroup
- **Description**: Leave a group room.
- **Parameters**:
  - `groupId` (number): The ID of the group to leave.

### sendMessage
- **Description**: Send a message to a group.
- **Parameters**:
  - `createMessageDto` (object): The message details.
    - `content` (string): The content of the message.
    - `userId` (number): The ID of the user sending the message.
    - `groupId` (number): The ID of the group to send the message to.

### findAllMessages
- **Description**: Find all messages in a group.
- **Parameters**:
  - `groupId` (number): The ID of the group.
