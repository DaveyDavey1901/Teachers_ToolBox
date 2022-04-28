import { motion } from "framer-motion";
import styled from "styled-components";

const Button = styled.div`
  z-index: 99;
  cursor: pointer;
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.33 };

export function MenuToggle({ toggle, isOpen }) {
  return (
    <Button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "#39BDE3" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "#fff" },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="#fff"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "#39BDE3" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "#39BDE3" },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
}
