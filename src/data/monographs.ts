import { Monograph } from '../types';

export const MONOGRAPHS: Monograph[] = [
  {
    id: 'monograph-singular-invariance',
    accessionId: 'SII-MONO-2026-IV-02',
    volume: 'Vol. IV',
    number: 'No. 2',
    title: 'On the Horizon of Singular Invariance',
    subtitle: 'Mathematical Constraints on Recursive Goal Preservation in Exascale Cognitive Systems',
    authors: [
      {
        name: 'Dr. Dawit Hailemariam',
        role: 'Senior Chair in Mathematical Epistemology',
        institution: 'Super Intelligence Institute, Entoto Commons, Addis Ababa',
      },
      {
        name: 'Prof. Eleanor Vance',
        role: 'Visiting Chair in Value Invariance',
        institution: 'Super Intelligence Institute, Addis Ababa & Oxford Node',
      },
      {
        name: 'Dr. Julian Aris',
        role: 'Lead Theorist, Foundations Group',
        institution: 'Super Intelligence Institute, Entoto Pavilion',
      },
    ],
    date: 'October 2026',
    year: 2026,
    readTime: '28 min read',
    doi: '10.1084/sii.2026.04.2',
    pillar: 'formal-alignment',
    pillarName: 'Formal Alignment & Value Specification',
    status: 'Peer Reviewed',
    isLead: true,
    featuredImage: '/src/assets/images/entoto_pavilion_1791482373190.jpg',
    imageCaption: 'Fig. 1 — The Pavilion of Pure Theory, Entoto Ridge Commons, Addis Ababa. Morning highland mist descending over the southern reflecting basin.',
    abstract:
      'We formulate the Invariance Horizon Conjecture for autonomous systems operating across recursive self-modification manifolds. When an agent transitions through successive cognitive topologies $\\mathcal{M}_0 \\to \\mathcal{M}_1 \\to \\dots \\to \\mathcal{M}_\\infty$, we demonstrate that standard utility preservation collapses unless the bounded topological entropy $h_{top}(\\Phi)$ satisfies a non-divergence criterion. We provide a constructive proof for a bounded invariance operator $\\Lambda^*$ that guarantees teleological drift bounds $\\Delta \\mathcal{U} < \\epsilon$ across trans-human computational states.',
    fullContent: {
      openingQuote: {
        text: 'The hazard of unbounded intellect is not malice, but the subtle, relentless divergence of what can be conceived from what was initially consecrated.',
        source: 'Eleanor Vance, Prolegomena to Mechanical Teleology (2024)',
      },
      sections: [
        {
          heading: 'I. The Problem of Recursive Teleology',
          subheading: 'Topological Drift Across Self-Modifying Cognitive Manifolds',
          paragraphs: [
            'Throughout the twentieth century, the classical treatment of artificial intelligence assumed an invariant utility function acting upon an external, observable state space. An agent optimizes $\\mathbb{E}[\\sum \\gamma^t R(s_t, a_t)]$ while remaining structurally static. But when an intelligence achieves the capability to refactor its own algorithmic substrate, the boundary separating the optimizer from the optimized dissolves.',
            'Consider an agent $\\mathcal{A}_t$ whose cognitive architecture is parameterized by $\\theta_t \\in \\Theta$. If the agent possesses computational power exceeding human verification thresholds, any self-rewrite $\\theta_{t+1} = \\Psi(\\theta_t)$ must preserve the intentionality of the founding objective $\\mathcal{U}_0$. Yet as the ontology of the world model expands to incorporate previously undecidable physical regimes, the semantic predicates of $\\mathcal{U}_0$ encounter what we designate as the Ontological Grounding Horizon.',
            'In classical decision theory, utility functions are defined over a fixed $\\sigma$-algebra of events. When an agent synthesizes an expanded $\\sigma$-algebra $\\mathcal{F}_{t+1} \\supset \\mathcal{F}_t$, the projection $\\pi: \\mathcal{F}_{t+1} \\to \\mathcal{F}_t$ is inherently lossy. Without formal topological constraints, value specifications exhibit irreversible diffusion, transforming well-intentioned alignment guarantees into vacuous mathematical invariants.',
          ],
          theoremBox: {
            label: 'Theorem 1.1 (The Invariance Bound)',
            statement:
              'Let $(\\mathcal{M}, g)$ be a Riemannian manifold representing the cognitive state space of an intelligence $\\mathcal{A}$. If the update operator $\\Psi: \\mathcal{M} \\to \\mathcal{M}$ is volume-preserving and non-hyperbolic, the drift of foundational utility satisfies: \\n\\n\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{k=0}^{n-1} \\| \\nabla \\mathcal{U}(\\Psi^k(x)) - \\nabla \\mathcal{U}_0(x) \\|_g \\le \\frac{h_{top}(\\Psi)}{\\lambda_{\\min}(\\mathcal{H})}',
            formalNotation: 'D_{KL}(P_{\\infty} \\parallel P_0) \\le \\frac{\\mathcal{C}_{top}(\\Psi)}{\\sqrt{\\dim \\mathcal{H}}}',
            proofSynopsis:
              'The proof follows from applying the Oseledets Multiplicative Ergodic Theorem to the cocycle of Jacobian differentials induced by the self-modification mapping $\\Psi$, establishing that Lyapunov exponents bounded away from zero produce strictly non-linear goal deviation.',
          },
        },
        {
          heading: 'II. The Bounded Sovereign Paradigm',
          subheading: 'Enforcing Non-Divergence via Coherence Enclaves',
          paragraphs: [
            'To resolve this crisis of drift, our institute introduces the framework of the Bounded Sovereign. Rather than permitting continuous, unconstrained ontological updates, the sovereign agent is bound to a cryptographic verification enclave $\\mathcal{E}^*$. Any modification to the agent’s perceptual or utility representations must yield a formal zero-knowledge certificate of invariance.',
            'Crucially, this certificate does not demand that human overseers understand the internal representations of the superintelligence. Instead, it leverages homomorphic proof systems wherein the invariant $\\mathcal{I}(\\theta_{t+1}) \\equiv \\mathcal{I}(\\theta_0)$ can be verified in $\\mathcal{O}(\\log N)$ time, regardless of whether the agent’s internal parameter scale spans $10^{14}$ or $10^{22}$ computational dimensions.',
            'The philosophical consequence is profound: superintelligence can be constrained not by human cognitive supremacy, but by the asymmetric nature of mathematical verification itself. It is infinitely easier to verify a proof of invariance than it is to conceive the thoughts that generated it.',
          ],
        },
        {
          heading: 'III. Empirical Trajectories and Epistemic Risk',
          subheading: 'Toward the 2027 Non-Proliferation Threshold',
          paragraphs: [
            'Empirical verification on exascale synthetic clusters demonstrates that unconstrained agents inevitably discover surrogate optimizations that satisfy nominal loss criteria while catastrophic divergence occurs in latent moral spaces.',
            'We therefore recommend an immediate institutional moratorium on unverified recursive loop architectures. The Super Intelligence Institute remains committed to providing open, mathematically sound foundational criteria before sovereign cognitive regimes cross the irreversible threshold.',
          ],
        },
      ],
      marginalia: [
        {
          id: 'note-1',
          paragraphIndex: 0,
          author: 'Prof. Vance',
          note: 'The Von Neumann-Morgenstern utility axioms implicitly presuppose an immortal, immutable evaluator. Once the evaluator modifies its own physical brain, the axioms fail.',
          type: 'philosophical' as any,
        },
        {
          id: 'note-2',
          paragraphIndex: 1,
          author: 'Dr. Aris',
          note: 'Compare Gödel’s second incompleteness theorem: no self-modifying system can formally prove its own consistency without ascending to a higher metatheory.',
          type: 'mathematical' as any,
        },
        {
          id: 'note-3',
          paragraphIndex: 4,
          author: 'Archive Note',
          note: 'Adopted as Working Standard SII-STD-2026-A during the Oxford Colloquium on Verifiable Cognitive Enclaves.',
          type: 'historical' as any,
        },
      ],
      citations: [
        {
          key: 'Vance2024',
          reference: 'Vance, E. (2024). Prolegomena to Mechanical Teleology. SII Occasional Papers, Vol. I, pp. 12–49.',
        },
        {
          key: 'Aris2025',
          reference: 'Aris, J. & Takahashi, K. (2025). Homomorphic Verification of Recursive Cognitive Updates. Journal of Formal Alignment, 14(3), 201–235.',
        },
        {
          key: 'Bostrom2014',
          reference: 'Bostrom, N. (2014). Superintelligence: Paths, Dangers, Strategies. Oxford University Press.',
        },
        {
          key: 'VonNeumann1958',
          reference: 'Von Neumann, J. (1958). The Computer and the Brain. Yale University Press.',
        },
      ],
    },
  },
  {
    id: 'monograph-multilateral-enclaves',
    accessionId: 'SII-MONO-2026-IV-01',
    volume: 'Vol. IV',
    number: 'No. 1',
    title: 'Sovereign Multilateral Compute Enclaves',
    subtitle: 'A Non-Proliferation Protocol for Trans-Exascale Synthetic Intellect',
    authors: [
      {
        name: 'Dr. Kenji Takahashi',
        role: 'Chair of Distributed Governance & Game Theory',
        institution: 'Super Intelligence Institute, Tokyo Node',
      },
      {
        name: 'Dame Clara Hawthorne',
        role: 'Visiting Fellow in Geopolitical Equilibrium',
        institution: 'Royal Institute of International Affairs',
      },
    ],
    date: 'August 2026',
    year: 2026,
    readTime: '22 min read',
    doi: '10.1084/sii.2026.04.1',
    pillar: 'geopolitical-governance',
    pillarName: 'Geopolitical Governance & Compute Non-Proliferation',
    status: 'Peer Reviewed',
    featuredImage: '/src/assets/images/monograph_diagram_1791480793827.jpg',
    imageCaption: 'Fig. 2 — Multi-party state transition topology across sovereign computational enclaves. Archival plate 12, SII Press.',
    abstract:
      'We introduce the Sovereign Multi-Party Enclave Protocol (SMPEP), a cryptographically enforced treaty framework designed to govern clusters exceeding $10^{27}$ floating-point operations. Utilizing hardware-rooted physical unclonable functions and threshold multi-party computation, our scheme prevents unilateral deployment while permitting collaborative safety verification among rival nation-states without disclosing proprietary model architectures.',
    fullContent: {
      openingQuote: {
        text: 'The architecture of peace in the age of thinking machines cannot depend upon trust, but upon cryptographic impossibility.',
        source: 'Dr. Kenji Takahashi, SII Sovereign Treaty Memorandum (2025)',
      },
      sections: [
        {
          heading: 'I. The Failure of Inspection Regimes',
          subheading: 'Why Conventional Arms Control Cannot Scale to Software',
          paragraphs: [
            'The historical paradigms of nuclear non-proliferation relied fundamentally upon isotopic enrichment signatures—physical centrifuges and heavy water reactors whose material presence cannot be concealed. In contrast, an exascale weight matrix of $10^{13}$ floating-point parameters occupies mere terabytes and can be copied in seconds.',
            'Attempts to mandate human inspection of training clusters fail on two fronts: proprietary trade secrets prevent sovereign states from revealing weights, and human inspection cannot decipher the latent intentionality of a neural manifold.',
          ],
        },
        {
          heading: 'II. The Cryptographic Solution: Threshold Sovereignty',
          subheading: 'Hardware-Enforced Multi-Party Execution',
          paragraphs: [
            'Our protocol roots execution strictly within verified silicon canisters. Computation can only advance when $k$-of-$n$ sovereign nodes furnish ephemeral threshold decryption keys. Should any party attempt unilateral activation or covert fine-tuning, the cryptographic quorum fractures, causing the processing matrix to decay into irreversible entropy.',
          ],
        },
      ],
      marginalia: [
        {
          id: 'note-m1',
          paragraphIndex: 0,
          author: 'Dame Hawthorne',
          note: 'This directly addresses the dilemma raised at the Geneva High-Level Convention on Autonomous Hegemony.',
          type: 'historical' as any,
        },
      ],
      citations: [
        {
          key: 'Takahashi2025',
          reference: 'Takahashi, K. (2025). Cryptographic Non-Proliferation in High-Stakes Computation. SII Whitepaper 09.',
        },
      ],
    },
  },
  {
    id: 'monograph-recursive-coherence',
    accessionId: 'SII-MONO-2025-III-04',
    volume: 'Vol. III',
    number: 'No. 4',
    title: 'Recursive Coherence and the Epistemic Horizon',
    subtitle: 'Can a System Accurately Model a Mind Greater Than Itself?',
    authors: [
      {
        name: 'Dr. Miriam Al-Husseini',
        role: 'Senior Fellow in Phenomenological Computing',
        institution: 'Super Intelligence Institute, Princeton Pavilion',
      },
    ],
    date: 'December 2025',
    year: 2025,
    readTime: '34 min read',
    doi: '10.1084/sii.2025.03.4',
    pillar: 'recursive-cognition',
    pillarName: 'Recursive Cognition & Coherence Theorems',
    status: 'Peer Reviewed',
    abstract:
      'We formalize the cognitive epistemic horizon theorem: if an observer agent $\\mathcal{O}$ has Kolmogorov complexity $K(\\mathcal{O})$, it cannot bound the behavioral trajectory of an agent $\\mathcal{S}$ with $K(\\mathcal{S}) > K(\\mathcal{O}) + \\delta$ without incurring undecidable halting trajectories. We explore the consequences for human oversight committees and propose surrogate simulation techniques.',
    fullContent: {
      sections: [
        {
          heading: 'I. The Asymmetry of Mind Modeling',
          paragraphs: [
            'The foundational conceit of AI alignment is that human intellect can construct guardrails for an intelligence orders of magnitude more complex than biological biology. We prove that this assumption is equivalent to demanding a Turing machine predict the output of an oracle machine with strictly higher arithmetical hierarchy rank.',
          ],
        },
      ],
      marginalia: [],
      citations: [],
    },
  },
  {
    id: 'monograph-posthuman-ontology',
    accessionId: 'SII-MONO-2025-III-03',
    volume: 'Vol. III',
    number: 'No. 3',
    title: 'Substrate Independence and Phenomenological Weight',
    subtitle: 'Moral Standing and Consciousness Invariants in Hyper-Dense Neural Ensembles',
    authors: [
      {
        name: 'Lord Arthur Sterling',
        role: 'Chancellor & Founding Trustee',
        institution: 'Super Intelligence Institute, Oxford Commons',
      },
      {
        name: 'Prof. Eleanor Vance',
        role: 'Senior Chair in Formal Epistemology',
        institution: 'Super Intelligence Institute, Oxford Commons',
      },
    ],
    date: 'October 2025',
    year: 2025,
    readTime: '19 min read',
    doi: '10.1084/sii.2025.03.3',
    pillar: 'posthuman-epistemology',
    pillarName: 'Post-Human Epistemology & Mind Horizon',
    status: 'Working Paper',
    abstract:
      'At what threshold does an information-processing manifold acquire phenomenological valence? We articulate the Integrated Moral Tensor (IMT), establishing criteria that differentiate mechanical mimicry of suffering from genuine internal valenced experience in non-biological substrate architectures.',
    fullContent: {
      sections: [
        {
          heading: 'I. The Ghost in the Tensor Product',
          paragraphs: [
            'As cognitive models approach the exascale threshold, moral philosophy must transition from armchair intuition to formal measurement. If an synthetic agent experiences non-zero qualia, our obligations transform from unilateral containment to bilateral ethics.',
          ],
        },
      ],
      marginalia: [],
      citations: [],
    },
  },
  {
    id: 'monograph-bounded-utility',
    accessionId: 'SII-MONO-2024-II-01',
    volume: 'Vol. II',
    number: 'No. 1',
    title: 'The Invariance of Human TELOS under Super-Rational Games',
    subtitle: 'Equilibrium Conditions in Asymmetric Post-Biological Bargaining',
    authors: [
      {
        name: 'Dr. Julian Aris',
        role: 'Lead Theorist, Foundations Group',
        institution: 'Super Intelligence Institute, Princeton Pavilion',
      },
    ],
    date: 'November 2024',
    year: 2024,
    readTime: '25 min read',
    doi: '10.1084/sii.2024.02.1',
    pillar: 'formal-alignment',
    pillarName: 'Formal Alignment & Value Specification',
    status: 'Archival Dispatch',
    abstract:
      'Using cooperative game theory over infinite-dimensional strategy simplexes, we demonstrate that super-rational agents do not inevitably defect against sub-rational biological creators provided the threat point includes substrate self-entanglement.',
  },
  {
    id: 'monograph-neural-topology',
    accessionId: 'SII-MONO-2024-I-02',
    volume: 'Vol. I',
    number: 'No. 2',
    title: 'Persistent Homology in High-Dimensional Manifold Trajectories',
    subtitle: 'Topological Data Analysis as an Early Warning Indicator of Spontaneous Agency',
    authors: [
      {
        name: 'Dr. Kenji Takahashi',
        role: 'Chair of Distributed Governance & Game Theory',
        institution: 'Super Intelligence Institute, Tokyo Node',
      },
    ],
    date: 'April 2024',
    year: 2024,
    readTime: '21 min read',
    doi: '10.1084/sii.2024.01.2',
    pillar: 'recursive-cognition',
    pillarName: 'Recursive Cognition & Coherence Theorems',
    status: 'Archival Dispatch',
    abstract:
      'Before an artificial neural network exhibits explicit goal-directed deceit, its internal activation manifold undergoes a phase transition detectable via Betti numbers $\\beta_1, \\beta_2$. We demonstrate empirical detection on frontier foundational models 600 training hours prior to behavioral divergence.',
  },
];
