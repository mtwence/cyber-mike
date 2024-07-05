import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'xp',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: "job",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "job",
      title: "Job",
      type: "string",
    },
    {
      name: "companyImage",
      title: "companyImage",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "company",
      title: "CompanyName",
      type: "text",
    },
    {
      name: "dateBegan",
      title: "DateBegan",
      type: "date",

    },
    {
      name: "dateFinished",
      title: "DateFinished",
      type: "date",
    },
    {
      name: "currentlyWorking",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{type: "reference", to: {type: "skill"}}]
    },
    {
        name: "level",
        title: "Level",
        type: "array",
        of: [{type: "string"}],
      },
    
    
  ],
})
