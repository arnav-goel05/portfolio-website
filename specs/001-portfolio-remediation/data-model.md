# Data Model: Portfolio Engineering Remediation

## Project

- `title`: unique visitor-facing project name
- `summary`: concise project positioning
- `details`: ordered Problem, Built, and Outcome records
- `technologies`: ordered technology labels
- `media`: image or video presentation metadata
- `links`: zero or more optional external destinations

Validation: title is non-empty; details have stable labels; media has an image or video source; absent links
do not render empty controls.

## Experience

- `id`: stable unique identifier used for rendering and expansion state
- `title`: organization or experience name
- `period`: date range
- `location`: optional location
- `summary`: collapsed description
- `details`: expanded paragraphs

Validation: `id` is unique across the collection; public placeholder records are not valid experiences.

## Site Link

- `label`: visible navigation text
- `href`: absolute external destination or normalized internal path
- `external`: whether a new browsing context is expected

## Hero Sticker

- `src`: decorative image asset
- `className`: stable visual-position token
- `alt`: empty because stickers are decorative

## Route

- `path`: normalized path with root preserved and trailing slash removed
- `page`: home, about, or not-found composition

State transition: browser load -> normalize path -> select one page -> render shared navigation and cursor once.
