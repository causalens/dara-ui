import { faArrowRightFromFile } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRightFromFile icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRightFromFile = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRightFromFile} {...props} />;
};

export default ArrowRightFromFile;
