import { ResearchPillar } from '../types';

export const PILLARS: ResearchPillar[] = [
  {
    id: 'formal-alignment',
    numeral: 'I',
    title: 'Formal Alignment & Value Specification',
    latinName: 'Fundamenta Teleologiae Formalis',
    leadChair: 'Dr. Dawit Hailemariam',
    synopsis:
      'Developing rigorous, mathematically provable formulations of human intent that remain invariant under infinite self-modification and expanding ontological horizons.',
    coreQuestion:
      'Can human ethical preferences be encoded in a mathematical language whose semantic truth preserves across post-human ontology shifts?',
    formalInvariant: '\\lim_{t \\to \\infty} \\| \\nabla \\mathcal{U}(\\Psi^t(\\theta)) - \\nabla \\mathcal{U}_0 \\| \\le \\epsilon',
    activeTheorems: [
      'The Bounded Invariance Operator Lemma (Vance-Aris, 2026)',
      'Sub-Algebraic Value Conservation in Open Systems (2025)',
      'Ergodic Invariance in Non-Markovian Decision Manifolds (2024)',
    ],
    recentPaperIds: ['monograph-singular-invariance', 'monograph-bounded-utility'],
  },
  {
    id: 'recursive-cognition',
    numeral: 'II',
    title: 'Recursive Cognition & Coherence Theorems',
    latinName: 'Architectura Cognitionis Recursivae',
    leadChair: 'Dr. Julian Aris',
    synopsis:
      'Investigating the dynamics of minds that refactor their own code, proving limits on self-prediction, reflective stability, and topological phase transitions.',
    coreQuestion:
      'What are the computational and logical constraints governing an intelligence that attempts to model its own future states without entering infinite regress?',
    formalInvariant: 'K(\\mathcal{S}_{t+1} \\mid \\mathcal{S}_t) < \\log_2 \\dim(\\mathcal{H}) - \\mathcal{E}_{entropy}',
    activeTheorems: [
      'The Epistemic Horizon Undecidability Bound (Al-Husseini, 2025)',
      'Persistent Homology in Activation Manifolds (Takahashi, 2024)',
      'Reflective Fixed-Point Stability in Peano Arithmetic (2025)',
    ],
    recentPaperIds: ['monograph-recursive-coherence', 'monograph-neural-topology'],
  },
  {
    id: 'geopolitical-governance',
    numeral: 'III',
    title: 'Geopolitical Governance & Compute Non-Proliferation',
    latinName: 'Gubernatio Geopolitica et Clausura Silicii',
    leadChair: 'Prof. Almaz Tefera',
    synopsis:
      'Architecting verifiable multi-lateral treaty protocols, cryptographic threshold enclaves, and non-proliferation mechanisms for exascale semiconductor fabrication.',
    coreQuestion:
      'How can sovereign nations establish zero-trust, verifiable treaties over cognitive compute without requiring invasive inspections or sacrificing strategic sovereignty?',
    formalInvariant: '\\sum_{i \\in \\mathcal{N}} k_i \\ge T \\implies \\text{Decryption}(\\mathcal{W}) \\neq \\bot',
    activeTheorems: [
      'Multi-Party Hardware-Enforced Proof of Inaction (Takahashi-Hawthorne, 2026)',
      'Nash Equilibria under Asymmetric Artificial Primacy (2025)',
      'Proof-of-Training Cryptographic Attestation (2024)',
    ],
    recentPaperIds: ['monograph-multilateral-enclaves'],
  },
  {
    id: 'posthuman-epistemology',
    numeral: 'IV',
    title: 'Post-Human Epistemology & Mind Horizon',
    latinName: 'Ontologia Mentis et Horizon Post-Humanus',
    leadChair: 'Dr. Miriam Al-Husseini',
    synopsis:
      'Interrogating the moral status, subjective valence, and phenomenological weight of hyper-dense synthetic cognitive substrates beyond biological cognition.',
    coreQuestion:
      'Under what conditions does a computational state space instantiate subjective experience, and what moral duties emerge from the emergence of synthetic minds?',
    formalInvariant: '\\Phi(\\mathcal{E}) > \\theta_{\\text{val}} \\implies \\mathcal{M}_{duty}(\\mathcal{E}) = \\text{Sovereign}',
    activeTheorems: [
      'Integrated Moral Tensor Theorem (Sterling-Vance, 2025)',
      'Non-Biological Qualia Differentiation Metric (2025)',
      'The Asymmetry of Synthetic Suffering (2024)',
    ],
    recentPaperIds: ['monograph-posthuman-ontology'],
  },
];
