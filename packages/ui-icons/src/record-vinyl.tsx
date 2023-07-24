import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RecordVinyl icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RecordVinyl = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRecordVinyl} {...props} />;
};

export default RecordVinyl;
