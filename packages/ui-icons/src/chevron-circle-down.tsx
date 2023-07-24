import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChevronCircleDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChevronCircleDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChevronCircleDown} {...props} />;
};

export default ChevronCircleDown;
