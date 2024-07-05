import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageDetails',
  title: 'PageDetails',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "hero",
      title: "HeroImage",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "about",
      title: "About",
      type: "string",
    },
    {
      name: "profile",
      title: "ProfileImage",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "phone",
      title: "PhoneNumber",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    
  ],
})
