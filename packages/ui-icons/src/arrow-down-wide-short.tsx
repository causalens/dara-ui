import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowDownWideShort icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowDownWideShort = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowDownWideShort} {...props} />;
};

export default ArrowDownWideShort;
