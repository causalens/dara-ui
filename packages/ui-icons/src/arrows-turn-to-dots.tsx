import { faArrowsTurnToDots } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsTurnToDots icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsTurnToDots = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsTurnToDots} {...props} />;
};

export default ArrowsTurnToDots;
