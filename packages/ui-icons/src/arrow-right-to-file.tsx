import { faArrowRightToFile } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRightToFile icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRightToFile = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRightToFile} {...props} />;
};

export default ArrowRightToFile;
