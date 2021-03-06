export const fadeUp = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    },
    onHover: {
      scale: 1.1,
    }
  };

export const stagger = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    },
  };

export const routeAnimation = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.1
        }
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0.1,
            ease: 'easeInOut'
        }
    }
}

export const fadeUpH2 = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    },
  };