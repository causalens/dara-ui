import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChevronCircleLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChevronCircleLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChevronCircleLeft} {...props} />;
};

export default ChevronCircleLeft;
