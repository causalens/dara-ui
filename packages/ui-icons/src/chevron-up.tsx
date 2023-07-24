import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChevronUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChevronUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChevronUp} {...props} />;
};

export default ChevronUp;
