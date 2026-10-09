export type PillarCategory = 
  | 'formal-alignment'
  | 'recursive-cognition'
  | 'geopolitical-governance'
  | 'posthuman-epistemology';

export interface MarginalNote {
  id: string;
  paragraphIndex: number;
  author: string;
  note: string;
  type: 'historical' | 'critique' | 'mathematical' | 'citation';
}

export interface Monograph {
  id: string;
  accessionId: string;
  volume: string;
  number: string;
  title: string;
  subtitle: string;
  authors: {
    name: string;
    role: string;
    institution: string;
  }[];
  date: string;
  year: number;
  readTime: string;
  doi: string;
  pillar: PillarCategory;
  pillarName: string;
  status: 'Peer Reviewed' | 'Working Paper' | 'Archival Dispatch';
  abstract: string;
  fullContent?: {
    openingQuote?: {
      text: string;
      source: string;
    };
    sections: {
      heading: string;
      subheading?: string;
      paragraphs: string[];
      theoremBox?: {
        label: string;
        statement: string;
        formalNotation: string;
        proofSynopsis: string;
      };
    }[];
    marginalia: MarginalNote[];
    citations: {
      key: string;
      reference: string;
    }[];
  };
  featuredImage?: string;
  imageCaption?: string;
  isLead?: boolean;
}

export interface ResearchPillar {
  id: PillarCategory;
  numeral: string;
  title: string;
  latinName: string;
  leadChair: string;
  synopsis: string;
  coreQuestion: string;
  formalInvariant: string;
  activeTheorems: string[];
  recentPaperIds: string[];
}

export interface Scholar {
  id: string;
  name: string;
  title: string;
  department: string;
  origin: string;
  bio: string;
  activeInquiry: string;
  recentPublications: string[];
}

export interface SymposiumSession {
  day: string;
  date: string;
  time: string;
  title: string;
  speaker: string;
  affiliation: string;
  location: string;
  description: string;
}
