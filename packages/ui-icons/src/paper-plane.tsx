import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PaperPlane icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PaperPlane = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPaperPlane} {...props} />;
};

export default PaperPlane;
