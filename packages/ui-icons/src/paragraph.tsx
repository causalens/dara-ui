import { faParagraph } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Paragraph icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Paragraph = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faParagraph} {...props} />;
};

export default Paragraph;
