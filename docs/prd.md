# Product Requirements Document

## Purpose

To provide a user-friendly platform that makes it simple to organize and track infomation about their cases.

## Target Users

Anybody who needs to organize their work around "cases"

## MVP Feature Set

1. Case Creation & Basic Information Management

- Simple form to create new cases with essential fields (name, ID, date opened, status)
- Basic case details page showing key information
- Ability to edit case information

2. Case List View & Simple Search

- Dashboard showing list of active cases
- Basic sorting (by date, status, etc.)
- Simple search functionality to find cases by key identifiers

3. Status Tracking

- Ability to update and track case status (e.g., Open, In Progress, Closed)
- Status change history log

4. Basic Notes & Updates

- Ability to add dated notes/updates to cases
- Chronological view of case history and activities

5. Simple User Management

- Basic login/authentication
- Display name of current user

## User Flows

### Case Creation Flow

1. User logs into the system
2. User navigates to "Create New Case" option
3. User completes required case information form
4. User submits the case
5. System confirms case creation and assigns case ID
6. User is redirected to the newly created case detail page

### 2. Case Search and Retrieval Flow

1. User logs into the system
2. User navigates to dashboard/case list
3. User filters or searches for specific case(s) using:
   - Case ID
   - Client name
   - Status
   - Date range
4. User selects a case from search results
5. System displays full case details

### 3. Case Update Flow

1. User navigates to an existing case
2. User selects "Edit" or "Update" option
3. User modifies case information or status
4. User adds notes about the update
5. User saves changes
6. System logs the update with timestamp
7. System displays updated case information

### 4. Case Note Addition Flow

1. User navigates to an existing case
2. User selects "Add Note" option
3. User enters note content and selects note type (if applicable)
4. User submits the note
5. System adds the note to case history with timestamp and user information
6. Note appears in chronological order on case detail page

### 5. Case Status Change Flow

1. User navigates to an existing case
2. User selects "Change Status" option
3. User selects new status from available options
4. User provides reason for status change (optional)
5. System updates status and logs the change
6. Case appears in appropriate status category in dashboard

## Tech Stack

| Layer              | Technology  | Purpose                    |
| ------------------ | ----------- | -------------------------- |
| **Frontend**       | Next.js     | React framework            |
|                    | shadcn/ui   | UI component library       |
| **Backend**        | FastAPI     | API framework              |
|                    | Pydantic    | Data validation            |
|                    | SQLAlchemy  | ORM                        |
| **Database**       | SQLite      | Data storage               |
| **Authentication** | NextAuth.js | Authentication for Next.js |

## Basic Repo Structure

open-caseui/
├── frontend/
├── backend/
├── docs/
└── README.md
