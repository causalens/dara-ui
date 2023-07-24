import { faSurprise } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Surprise icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Surprise = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSurprise} {...props} />;
};

export default Surprise;
